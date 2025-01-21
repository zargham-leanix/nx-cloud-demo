import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib63Demo31Component } from './lib63-demo31.component';

describe('Lib63Demo31Component', () => {
  let component: Lib63Demo31Component;
  let fixture: ComponentFixture<Lib63Demo31Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib63Demo31Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib63Demo31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
