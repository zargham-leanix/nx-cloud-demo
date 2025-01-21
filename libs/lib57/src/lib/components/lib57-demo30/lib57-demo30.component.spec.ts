import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib57Demo30Component } from './lib57-demo30.component';

describe('Lib57Demo30Component', () => {
  let component: Lib57Demo30Component;
  let fixture: ComponentFixture<Lib57Demo30Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib57Demo30Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib57Demo30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
