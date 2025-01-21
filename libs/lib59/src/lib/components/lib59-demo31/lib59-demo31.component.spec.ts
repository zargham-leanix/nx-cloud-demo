import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib59Demo31Component } from './lib59-demo31.component';

describe('Lib59Demo31Component', () => {
  let component: Lib59Demo31Component;
  let fixture: ComponentFixture<Lib59Demo31Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib59Demo31Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib59Demo31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
