import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib53Demo44Component } from './lib53-demo44.component';

describe('Lib53Demo44Component', () => {
  let component: Lib53Demo44Component;
  let fixture: ComponentFixture<Lib53Demo44Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib53Demo44Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib53Demo44Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
