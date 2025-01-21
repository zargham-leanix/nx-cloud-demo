import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib78Demo34Component } from './lib78-demo34.component';

describe('Lib78Demo34Component', () => {
  let component: Lib78Demo34Component;
  let fixture: ComponentFixture<Lib78Demo34Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib78Demo34Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib78Demo34Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
