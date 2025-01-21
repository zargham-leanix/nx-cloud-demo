import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib100Demo19Component } from './lib100-demo19.component';

describe('Lib100Demo19Component', () => {
  let component: Lib100Demo19Component;
  let fixture: ComponentFixture<Lib100Demo19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib100Demo19Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib100Demo19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
