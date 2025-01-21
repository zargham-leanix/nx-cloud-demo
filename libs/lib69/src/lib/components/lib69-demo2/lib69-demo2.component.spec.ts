import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib69Demo2Component } from './lib69-demo2.component';

describe('Lib69Demo2Component', () => {
  let component: Lib69Demo2Component;
  let fixture: ComponentFixture<Lib69Demo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib69Demo2Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib69Demo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
