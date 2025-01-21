import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib69Demo47Component } from './lib69-demo47.component';

describe('Lib69Demo47Component', () => {
  let component: Lib69Demo47Component;
  let fixture: ComponentFixture<Lib69Demo47Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib69Demo47Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib69Demo47Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
