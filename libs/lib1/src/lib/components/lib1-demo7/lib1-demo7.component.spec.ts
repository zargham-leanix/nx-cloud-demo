import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib1Demo7Component } from './lib1-demo7.component';

describe('Lib1Demo7Component', () => {
  let component: Lib1Demo7Component;
  let fixture: ComponentFixture<Lib1Demo7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib1Demo7Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib1Demo7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
