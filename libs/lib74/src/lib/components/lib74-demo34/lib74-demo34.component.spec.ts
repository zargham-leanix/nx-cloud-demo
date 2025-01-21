import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib74Demo34Component } from './lib74-demo34.component';

describe('Lib74Demo34Component', () => {
  let component: Lib74Demo34Component;
  let fixture: ComponentFixture<Lib74Demo34Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib74Demo34Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib74Demo34Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
