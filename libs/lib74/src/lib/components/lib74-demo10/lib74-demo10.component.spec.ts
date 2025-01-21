import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib74Demo10Component } from './lib74-demo10.component';

describe('Lib74Demo10Component', () => {
  let component: Lib74Demo10Component;
  let fixture: ComponentFixture<Lib74Demo10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib74Demo10Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib74Demo10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
