import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib85Demo34Component } from './lib85-demo34.component';

describe('Lib85Demo34Component', () => {
  let component: Lib85Demo34Component;
  let fixture: ComponentFixture<Lib85Demo34Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib85Demo34Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib85Demo34Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
