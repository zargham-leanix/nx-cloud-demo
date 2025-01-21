import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib39Demo9Component } from './lib39-demo9.component';

describe('Lib39Demo9Component', () => {
  let component: Lib39Demo9Component;
  let fixture: ComponentFixture<Lib39Demo9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib39Demo9Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib39Demo9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
