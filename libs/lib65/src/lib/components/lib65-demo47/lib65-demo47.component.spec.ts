import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib65Demo47Component } from './lib65-demo47.component';

describe('Lib65Demo47Component', () => {
  let component: Lib65Demo47Component;
  let fixture: ComponentFixture<Lib65Demo47Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib65Demo47Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib65Demo47Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
