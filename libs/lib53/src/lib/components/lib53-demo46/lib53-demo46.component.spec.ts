import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib53Demo46Component } from './lib53-demo46.component';

describe('Lib53Demo46Component', () => {
  let component: Lib53Demo46Component;
  let fixture: ComponentFixture<Lib53Demo46Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib53Demo46Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib53Demo46Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
