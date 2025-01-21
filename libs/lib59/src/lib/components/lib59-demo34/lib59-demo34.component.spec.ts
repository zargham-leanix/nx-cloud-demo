import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib59Demo34Component } from './lib59-demo34.component';

describe('Lib59Demo34Component', () => {
  let component: Lib59Demo34Component;
  let fixture: ComponentFixture<Lib59Demo34Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib59Demo34Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib59Demo34Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
