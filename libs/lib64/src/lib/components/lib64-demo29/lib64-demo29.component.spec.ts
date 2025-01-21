import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib64Demo29Component } from './lib64-demo29.component';

describe('Lib64Demo29Component', () => {
  let component: Lib64Demo29Component;
  let fixture: ComponentFixture<Lib64Demo29Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib64Demo29Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib64Demo29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
