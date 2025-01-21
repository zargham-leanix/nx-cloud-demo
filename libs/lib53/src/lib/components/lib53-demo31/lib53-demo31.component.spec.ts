import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib53Demo31Component } from './lib53-demo31.component';

describe('Lib53Demo31Component', () => {
  let component: Lib53Demo31Component;
  let fixture: ComponentFixture<Lib53Demo31Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib53Demo31Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib53Demo31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
