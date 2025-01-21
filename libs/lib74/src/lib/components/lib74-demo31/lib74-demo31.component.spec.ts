import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib74Demo31Component } from './lib74-demo31.component';

describe('Lib74Demo31Component', () => {
  let component: Lib74Demo31Component;
  let fixture: ComponentFixture<Lib74Demo31Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib74Demo31Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib74Demo31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
