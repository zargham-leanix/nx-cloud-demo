import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib97Demo42Component } from './lib97-demo42.component';

describe('Lib97Demo42Component', () => {
  let component: Lib97Demo42Component;
  let fixture: ComponentFixture<Lib97Demo42Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib97Demo42Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib97Demo42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
