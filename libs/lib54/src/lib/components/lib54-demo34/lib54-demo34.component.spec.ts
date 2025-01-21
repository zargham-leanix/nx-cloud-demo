import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib54Demo34Component } from './lib54-demo34.component';

describe('Lib54Demo34Component', () => {
  let component: Lib54Demo34Component;
  let fixture: ComponentFixture<Lib54Demo34Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib54Demo34Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib54Demo34Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
