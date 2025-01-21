import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib89Demo41Component } from './lib89-demo41.component';

describe('Lib89Demo41Component', () => {
  let component: Lib89Demo41Component;
  let fixture: ComponentFixture<Lib89Demo41Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib89Demo41Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib89Demo41Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
