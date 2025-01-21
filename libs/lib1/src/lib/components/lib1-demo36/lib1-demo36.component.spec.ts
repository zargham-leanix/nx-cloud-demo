import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib1Demo36Component } from './lib1-demo36.component';

describe('Lib1Demo36Component', () => {
  let component: Lib1Demo36Component;
  let fixture: ComponentFixture<Lib1Demo36Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib1Demo36Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib1Demo36Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
