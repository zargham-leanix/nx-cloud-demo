import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib70Demo37Component } from './lib70-demo37.component';

describe('Lib70Demo37Component', () => {
  let component: Lib70Demo37Component;
  let fixture: ComponentFixture<Lib70Demo37Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib70Demo37Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib70Demo37Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
