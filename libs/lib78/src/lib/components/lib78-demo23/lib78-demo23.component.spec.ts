import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib78Demo23Component } from './lib78-demo23.component';

describe('Lib78Demo23Component', () => {
  let component: Lib78Demo23Component;
  let fixture: ComponentFixture<Lib78Demo23Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib78Demo23Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib78Demo23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
