import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib53Demo34Component } from './lib53-demo34.component';

describe('Lib53Demo34Component', () => {
  let component: Lib53Demo34Component;
  let fixture: ComponentFixture<Lib53Demo34Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib53Demo34Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib53Demo34Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
