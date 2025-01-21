import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib71Demo34Component } from './lib71-demo34.component';

describe('Lib71Demo34Component', () => {
  let component: Lib71Demo34Component;
  let fixture: ComponentFixture<Lib71Demo34Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib71Demo34Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib71Demo34Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
