import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib22Demo30Component } from './lib22-demo30.component';

describe('Lib22Demo30Component', () => {
  let component: Lib22Demo30Component;
  let fixture: ComponentFixture<Lib22Demo30Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib22Demo30Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib22Demo30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
