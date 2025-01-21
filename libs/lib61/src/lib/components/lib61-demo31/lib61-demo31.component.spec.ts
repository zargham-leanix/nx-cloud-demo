import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib61Demo31Component } from './lib61-demo31.component';

describe('Lib61Demo31Component', () => {
  let component: Lib61Demo31Component;
  let fixture: ComponentFixture<Lib61Demo31Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib61Demo31Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib61Demo31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
