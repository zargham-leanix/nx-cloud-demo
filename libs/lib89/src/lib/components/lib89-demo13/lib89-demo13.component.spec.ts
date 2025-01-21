import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib89Demo13Component } from './lib89-demo13.component';

describe('Lib89Demo13Component', () => {
  let component: Lib89Demo13Component;
  let fixture: ComponentFixture<Lib89Demo13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib89Demo13Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib89Demo13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
