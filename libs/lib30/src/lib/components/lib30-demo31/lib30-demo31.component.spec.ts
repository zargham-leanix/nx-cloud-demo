import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib30Demo31Component } from './lib30-demo31.component';

describe('Lib30Demo31Component', () => {
  let component: Lib30Demo31Component;
  let fixture: ComponentFixture<Lib30Demo31Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib30Demo31Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib30Demo31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
