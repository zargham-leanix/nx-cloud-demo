import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib82Demo30Component } from './lib82-demo30.component';

describe('Lib82Demo30Component', () => {
  let component: Lib82Demo30Component;
  let fixture: ComponentFixture<Lib82Demo30Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib82Demo30Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib82Demo30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
