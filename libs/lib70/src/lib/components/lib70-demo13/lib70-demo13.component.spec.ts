import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib70Demo13Component } from './lib70-demo13.component';

describe('Lib70Demo13Component', () => {
  let component: Lib70Demo13Component;
  let fixture: ComponentFixture<Lib70Demo13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib70Demo13Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib70Demo13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
