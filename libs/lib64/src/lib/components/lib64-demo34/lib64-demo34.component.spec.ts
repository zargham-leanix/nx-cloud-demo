import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib64Demo34Component } from './lib64-demo34.component';

describe('Lib64Demo34Component', () => {
  let component: Lib64Demo34Component;
  let fixture: ComponentFixture<Lib64Demo34Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib64Demo34Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib64Demo34Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
