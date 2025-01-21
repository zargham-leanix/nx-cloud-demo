import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib40Demo31Component } from './lib40-demo31.component';

describe('Lib40Demo31Component', () => {
  let component: Lib40Demo31Component;
  let fixture: ComponentFixture<Lib40Demo31Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib40Demo31Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib40Demo31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
