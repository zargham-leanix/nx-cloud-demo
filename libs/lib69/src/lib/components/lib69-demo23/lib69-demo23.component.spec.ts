import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib69Demo23Component } from './lib69-demo23.component';

describe('Lib69Demo23Component', () => {
  let component: Lib69Demo23Component;
  let fixture: ComponentFixture<Lib69Demo23Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib69Demo23Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib69Demo23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
