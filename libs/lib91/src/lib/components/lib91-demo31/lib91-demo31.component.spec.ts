import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib91Demo31Component } from './lib91-demo31.component';

describe('Lib91Demo31Component', () => {
  let component: Lib91Demo31Component;
  let fixture: ComponentFixture<Lib91Demo31Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib91Demo31Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib91Demo31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
