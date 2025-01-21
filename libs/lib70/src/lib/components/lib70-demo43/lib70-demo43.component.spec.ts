import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib70Demo43Component } from './lib70-demo43.component';

describe('Lib70Demo43Component', () => {
  let component: Lib70Demo43Component;
  let fixture: ComponentFixture<Lib70Demo43Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib70Demo43Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib70Demo43Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
