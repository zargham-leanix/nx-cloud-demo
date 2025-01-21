import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib79Demo12Component } from './lib79-demo12.component';

describe('Lib79Demo12Component', () => {
  let component: Lib79Demo12Component;
  let fixture: ComponentFixture<Lib79Demo12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib79Demo12Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib79Demo12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
