import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib27Demo34Component } from './lib27-demo34.component';

describe('Lib27Demo34Component', () => {
  let component: Lib27Demo34Component;
  let fixture: ComponentFixture<Lib27Demo34Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib27Demo34Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib27Demo34Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
