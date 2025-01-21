import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib53Demo23Component } from './lib53-demo23.component';

describe('Lib53Demo23Component', () => {
  let component: Lib53Demo23Component;
  let fixture: ComponentFixture<Lib53Demo23Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib53Demo23Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib53Demo23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
