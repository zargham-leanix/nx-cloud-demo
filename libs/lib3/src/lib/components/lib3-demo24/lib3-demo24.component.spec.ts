import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib3Demo24Component } from './lib3-demo24.component';

describe('Lib3Demo24Component', () => {
  let component: Lib3Demo24Component;
  let fixture: ComponentFixture<Lib3Demo24Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib3Demo24Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib3Demo24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
