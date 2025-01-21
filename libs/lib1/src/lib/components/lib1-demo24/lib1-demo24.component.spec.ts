import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib1Demo24Component } from './lib1-demo24.component';

describe('Lib1Demo24Component', () => {
  let component: Lib1Demo24Component;
  let fixture: ComponentFixture<Lib1Demo24Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib1Demo24Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib1Demo24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
