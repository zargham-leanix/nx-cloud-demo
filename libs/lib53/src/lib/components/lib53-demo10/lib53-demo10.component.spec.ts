import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib53Demo10Component } from './lib53-demo10.component';

describe('Lib53Demo10Component', () => {
  let component: Lib53Demo10Component;
  let fixture: ComponentFixture<Lib53Demo10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib53Demo10Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib53Demo10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
