import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib78Demo10Component } from './lib78-demo10.component';

describe('Lib78Demo10Component', () => {
  let component: Lib78Demo10Component;
  let fixture: ComponentFixture<Lib78Demo10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib78Demo10Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib78Demo10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
