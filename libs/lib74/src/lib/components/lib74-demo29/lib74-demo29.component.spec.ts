import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib74Demo29Component } from './lib74-demo29.component';

describe('Lib74Demo29Component', () => {
  let component: Lib74Demo29Component;
  let fixture: ComponentFixture<Lib74Demo29Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib74Demo29Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib74Demo29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
