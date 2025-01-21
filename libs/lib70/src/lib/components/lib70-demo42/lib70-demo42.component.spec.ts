import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib70Demo42Component } from './lib70-demo42.component';

describe('Lib70Demo42Component', () => {
  let component: Lib70Demo42Component;
  let fixture: ComponentFixture<Lib70Demo42Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib70Demo42Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib70Demo42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
