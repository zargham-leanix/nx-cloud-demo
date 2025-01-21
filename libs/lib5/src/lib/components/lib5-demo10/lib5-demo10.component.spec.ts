import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib5Demo10Component } from './lib5-demo10.component';

describe('Lib5Demo10Component', () => {
  let component: Lib5Demo10Component;
  let fixture: ComponentFixture<Lib5Demo10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib5Demo10Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib5Demo10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
