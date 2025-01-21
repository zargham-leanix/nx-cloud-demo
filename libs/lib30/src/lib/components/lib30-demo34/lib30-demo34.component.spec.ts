import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib30Demo34Component } from './lib30-demo34.component';

describe('Lib30Demo34Component', () => {
  let component: Lib30Demo34Component;
  let fixture: ComponentFixture<Lib30Demo34Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib30Demo34Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib30Demo34Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
