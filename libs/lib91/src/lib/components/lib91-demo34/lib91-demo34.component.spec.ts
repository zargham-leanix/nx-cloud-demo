import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib91Demo34Component } from './lib91-demo34.component';

describe('Lib91Demo34Component', () => {
  let component: Lib91Demo34Component;
  let fixture: ComponentFixture<Lib91Demo34Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib91Demo34Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib91Demo34Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
