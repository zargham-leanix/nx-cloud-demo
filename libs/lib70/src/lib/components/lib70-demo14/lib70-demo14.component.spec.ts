import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib70Demo14Component } from './lib70-demo14.component';

describe('Lib70Demo14Component', () => {
  let component: Lib70Demo14Component;
  let fixture: ComponentFixture<Lib70Demo14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib70Demo14Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib70Demo14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
