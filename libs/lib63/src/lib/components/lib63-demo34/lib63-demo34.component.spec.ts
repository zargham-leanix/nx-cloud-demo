import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib63Demo34Component } from './lib63-demo34.component';

describe('Lib63Demo34Component', () => {
  let component: Lib63Demo34Component;
  let fixture: ComponentFixture<Lib63Demo34Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib63Demo34Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib63Demo34Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
