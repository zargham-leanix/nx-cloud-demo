import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib69Demo8Component } from './lib69-demo8.component';

describe('Lib69Demo8Component', () => {
  let component: Lib69Demo8Component;
  let fixture: ComponentFixture<Lib69Demo8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib69Demo8Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib69Demo8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
