import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib45Demo10Component } from './lib45-demo10.component';

describe('Lib45Demo10Component', () => {
  let component: Lib45Demo10Component;
  let fixture: ComponentFixture<Lib45Demo10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib45Demo10Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib45Demo10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
